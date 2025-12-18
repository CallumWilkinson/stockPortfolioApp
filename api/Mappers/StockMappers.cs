using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using api.Models;

namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockDto toStockDto(this Stock stockModel)
        {
            return new StockDto
            {
                id = stockModel.id,
                Symbol = stockModel.Symbol,
                CompanyName = stockModel.CompanyName,
                Purchase = stockModel.Purchase,
                LastDiv = stockModel.LastDiv,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap,
                Comments = stockModel.Comments.Select(c => c.ToCommentDto()).ToList(),
            };
        }

        public static Stock toStockFromCreateDto(this CreateStockRequestDto stockDto)
        {
            return new Stock
            {
                Symbol = stockDto.Symbol,
                CompanyName = stockDto.CompanyName,
                Purchase = stockDto.Purchase,
                LastDiv = stockDto.LastDiv,
                Industry = stockDto.Industry,
                MarketCap = stockDto.MarketCap,

            };
        }

        public static Stock toStockFromFMPStockDto(this FMPStockDto fmpStockDto)
        {
            return new Stock
            {
                Symbol = fmpStockDto.symbol,
                CompanyName = fmpStockDto.companyName,
                Purchase = (decimal)fmpStockDto.price,
                LastDiv = (decimal)fmpStockDto.lastDividend,
                Industry = fmpStockDto.industry,
                MarketCap = fmpStockDto.marketCap,

            };
        }
    }

}