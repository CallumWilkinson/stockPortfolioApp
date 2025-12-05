using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        private readonly IStockRepository _stockRepo;

        public StockController(ApplicationDBContext context, IStockRepository stockRepo)
        {
            _context = context;
            _stockRepo = stockRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stocks = await _stockRepo.GetAllAsync();

            var stockDto = stocks.Select(s => s.toStockDto());

            return Ok(stockDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID([FromRoute] int id)
        {
            var stock = await _context.Stocks.FindAsync(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock.toStockDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequestDto stockDto)
        {
            var stockModel = stockDto.toStockFromCreateDto();
            await _context.Stocks.AddAsync(stockModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetByID), new { id = stockModel.id }, stockModel.toStockDto());

        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateDto)
        {
            var stockModel = await _context.Stocks.FirstOrDefaultAsync(x => x.id == id);

            if (stockModel == null)
            {
                return NotFound();
            }

            stockModel.Symbol = updateDto.Symbol;
            stockModel.Purchase = updateDto.Purchase;
            stockModel.CompanyName = updateDto.CompanyName;
            stockModel.LastDiv = updateDto.LastDiv;
            stockModel.Industry = updateDto.Industry;
            stockModel.MarketCap = updateDto.MarketCap;

            await _context.SaveChangesAsync();

            return Ok(stockModel.toStockDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var stockModel = await _context.Stocks.FirstOrDefaultAsync(x => x.id == id);

            if (stockModel == null)
            {
                return NotFound();
            }

            _context.Stocks.Remove(stockModel);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}