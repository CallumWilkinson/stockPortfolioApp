using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Models;

namespace api.Interfaces
{
    public interface IPortfolioRepository

    {

        Task<List<Stock>> getUserPortfolio(AppUser user);
        Task<Portfolio> CreateAsync(Portfolio portfolio);

        Task<Portfolio> DeleteAsync(AppUser user, string symbol);
    };
}