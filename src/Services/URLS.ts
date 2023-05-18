abstract class Global{
}
class Development extends Global{
    public urls = {
         url : "https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json"
        
    }
}
class Production extends Global{
    public urls ={
        url : "https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json"
    }
}
const urlService = (process.env.NODE_ENV === "production") ? new Production() : new Development();
export default urlService;