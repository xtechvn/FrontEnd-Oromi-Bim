namespace BIOLIFE.Models
{
    public class CartConfirmRequestModel
    {
        public int account_client_id { get; set; }
        public int delivery_type { get; set; }
        public int payment_type { get; set; }
        public List<CartConfirmItemRequestModel> carts { get; set; }
        public AddressClientFEModel address { get; set; }
        public long address_id { get; set; }
        public string phone { get; set; }
        public string receivername { get; set; }
        public string note { get; set; }
    

    }
    public class CartConfirmItemRequestModel
    {
        public string id { get; set; }
        public string product_id { get; set; }
        public int quanity { get; set; }
    } public class AddressClientFEModel
    {
        public string wardid { get; set; }
        public string provinceid { get; set; }
        public string districtid { get; set; }
        public string receivername { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
    }
}
