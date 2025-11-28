using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Comment
    {
        //primary key
        public int id { get; set; }

        public string Content { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;

        public DateTime CreatedOn { get; set; } = DateTime.Now;

        //foreign key
        public int? StockID { get; set; }

        //navigation
        public Stock? Stock { get; set; }

    }
}