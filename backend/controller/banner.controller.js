const dbConfig = require ('../config/config.js');
const mysql = require('mysql2');
const pool = mysql.createPool({...dbConfig,connectionLimit: 10}).promise();

const getBanners = async(req,res)=>{
    const [result] = await pool.query('SELECT * FROM banner_image');
    return res.status(200).send(result);
}

const getBannersById = async (req,res)=>{
    const id = req.params.id
    const [result] = await pool.query('SELECT * FROM banner_image WHERE id = ?',[id]);
    return res.status(200).send(result[0]);
}
const deleteBanner = async (req,res)=>{
    const id = req.params.id;
    const [result] = await pool.query('DELETE FROM banner_image WHERE id = ?',[id]);
    return res.status(200).send(result.affectedRows);
}
const createBanner = async (req,res)=>{
    try {
        const images = req.files;
        for (let i in images){
            const imgname = images[i].filename;
            await pool.query(`INSERT INTO banner_image (image) VALUES (?)`,[imgname]);
        }
        
        return res.status(201).json({images});
    } catch (e) {
        return res.status(500).json({
            "message": "Internal Server Error"
        });
    }
}

module.exports = {
    getBanners,getBannersById,
    deleteBanner,createBanner

}