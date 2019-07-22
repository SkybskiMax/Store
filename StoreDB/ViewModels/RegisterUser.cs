using System.ComponentModel.DataAnnotations;
 
namespace StoreDB.ViewModels
{
    public class RegisterUser
    {
        [Required]
        public string Email { get; set; }
 
        [Required]
        [DataType(DataType.Password)]
        [RegularExpression("(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$", ErrorMessage = "Password must be alphanumeric with at least one number, one letter, and be between 6-15 character in length.)")]
        public string Password { get; set; }
 
        [Required]
        [Compare("Password", ErrorMessage = "Password don't match")]
        [DataType(DataType.Password)]
        public string PasswordConfirm { get; set; }
    }
}