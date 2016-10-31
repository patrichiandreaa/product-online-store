using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductOnlineStore.Model
{
    public class Product
    {
        public Guid IdProduct { get; set; }
        public string Name { get; set; }
        public Guid IdCategory { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
