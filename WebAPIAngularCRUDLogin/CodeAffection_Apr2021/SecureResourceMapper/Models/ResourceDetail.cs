using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SecureResourceMapper.Models
{
    public class ResourceDetail
    {
        [Key]
        public int ResourceDetailId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string URLpath { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string SourceCodePath { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string LocalPath { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        public string Description { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string TimelineInfo { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string LocalProjTitle { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Channel { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string VisitedOnDate { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string Tags { get; set; }
    }
}
