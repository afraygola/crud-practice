export const fetch = async (req,res) => {
    try {
        return res.json("Hello world")
    }catch{
        res.status(500).json({error: "Internal server error"})
    }
}