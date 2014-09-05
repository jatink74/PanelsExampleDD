using PanelsExampleDD.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PanelsExampleDD.Controllers
{
    public class PlayersController : ApiController{

        private PlayerContext db = new PlayerContext();

    
        // POST: api/Players
        public IHttpActionResult PostPlayers([FromBody] string data) {
            if (string.IsNullOrEmpty(data)) {
                return BadRequest("Players Json cannot be empty");
            }
            db.PlayerChoices.Add(new PlayerChoice() {PlayersJson = data });
            db.SaveChanges();
            return Ok();
        }
    }
}
