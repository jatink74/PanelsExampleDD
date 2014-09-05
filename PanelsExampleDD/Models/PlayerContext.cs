using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PanelsExampleDD.Models {

    public class PlayerContext : DbContext {

        public PlayerContext()
            : base("PlayerContextDbString") {
            Database.SetInitializer<PlayerContext>(new CreateDatabaseIfNotExists<PlayerContext>());
        }

        public DbSet<PlayerChoice> PlayerChoices { get; set; }
    }
}