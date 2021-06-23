using Microsoft.EntityFrameworkCore;
using SecureResourceMapper.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreDemo.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options)
        : base(options)
        {


        }


        public DbSet<PaymentDetail> paymentDetails { get; set; }
        public DbSet<ResourceDetail> resourceDetails { get; set; }
    }
}
