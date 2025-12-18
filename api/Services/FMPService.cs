using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Newtonsoft.Json;

namespace api.Services
{
    public class FMPService : IFMPService
    {

        private readonly HttpClient _httpClient;

        private readonly IConfiguration _config;

        public FMPService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }
        public async Task<Stock> FindStockBySymbolAsync(string symbol)
        {
            string apiKey = _config["FMPKey"];

            if (string.IsNullOrWhiteSpace(apiKey))
            {
                throw new InvalidOperationException("FMPKey is not configured.");
            }

            string url =
                $"https://financialmodelingprep.com/stable/profile" +
                $"?symbol={symbol}&apikey={apiKey}";

            try
            {
                var result = await _httpClient.GetAsync(url);
                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var tasks = JsonConvert.DeserializeObject<FMPStockDto[]>(content);
                    var stock = tasks[0];
                    if (stock != null)
                    {
                        return stock.toStockFromFMPStockDto();
                    }
                    return null;
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return null;


        }
    }
}