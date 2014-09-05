using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PanelsExampleDD.Models {

    [Table("PlayerChoices")]
    public class PlayerChoice {
        public int Id { get; set; }

        [Required(AllowEmptyStrings=false, ErrorMessage="Player Json cannot be empty")]
        public string PlayersJson { get; set; }
    }
}