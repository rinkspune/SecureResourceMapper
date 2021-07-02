using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetCoreDemo.Models;
using SecureResourceMapper.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace SecureResourceMapper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResourceDetailController : ControllerBase
    {
        private readonly PaymentDetailContext _context;

        public ResourceDetailController(PaymentDetailContext context)
        {
            _context = context;
        }

        // GET: api/ResourceDetail
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetresourceDetails()
        {
            if (_context.resourceDetails.ToListAsync().Result.Count() > 0)
                return await _context.resourceDetails.ToListAsync();
            else
                return await _context.paymentDetails.ToListAsync();
        }

        [HttpPost, Route("login")]
        public  IActionResult Login([FromBody] LoginModel user)
        {
            if (user == null)
                return BadRequest("Invalid user request");

            if (user.UserName == "Vedant Upwanshi" && user.Password == "Ramanuj Upwanshi")
            {

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOptions = new JwtSecurityToken(
                    issuer: "http://localhost:23495",
                    audience: "http://localhost:23495",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(10),
                    signingCredentials: signingCredentials
                    );


                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return  Ok(new { Token = tokenString });
            }
            return  Unauthorized();
        }


        // GET: api/ResourceDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ResourceDetail>> GetResourceDetail(int id)
        {
            var resourceDetail = await _context.resourceDetails.FindAsync(id);

            if (resourceDetail == null)
            {
                return NotFound();
            }

            return resourceDetail;
        }

        // PUT: api/ResourceDetail/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResourceDetail(int id, ResourceDetail resourceDetail)
        {
            if (id != resourceDetail.ResourceDetailId)
            {
                return BadRequest();
            }

            _context.Entry(resourceDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResourceDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ResourceDetail
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ResourceDetail>> PostResourceDetail(ResourceDetail resourceDetail)
        {
            _context.resourceDetails.Add(resourceDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetResourceDetail", new { id = resourceDetail.ResourceDetailId }, resourceDetail);
        }

        // DELETE: api/ResourceDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ResourceDetail>> DeleteResourceDetail(int id)
        {
            var resourceDetail = await _context.resourceDetails.FindAsync(id);
            if (resourceDetail == null)
            {
                return NotFound();
            }

            _context.resourceDetails.Remove(resourceDetail);
            await _context.SaveChangesAsync();

            return resourceDetail;
        }

        private bool ResourceDetailExists(int id)
        {
            return _context.resourceDetails.Any(e => e.ResourceDetailId == id);
        }
    }
}
