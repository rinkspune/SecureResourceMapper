using Microsoft.EntityFrameworkCore.Migrations;

namespace DotNetCoreDemo.Migrations
{
    public partial class ResourceDetail_For_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "resourceDetails",
                columns: table => new
                {
                    ResourceDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    URLpath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SourceCodePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LocalPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(300)", nullable: true),
                    TimelineInfo = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    LocalProjTitle = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Channel = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    VisitedOnDate = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Tags = table.Column<string>(type: "nvarchar(200)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_resourceDetails", x => x.ResourceDetailId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "resourceDetails");
        }
    }
}
