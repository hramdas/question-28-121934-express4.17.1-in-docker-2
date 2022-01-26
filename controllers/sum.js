const Num = require('../models/num')
const express = require('express')

const getSum = async (req, res, err)=>{
    try{
        const sum = req.body.number1 + req.body.number2
        if(!sum){
            return res.status(400).json({})
        }
        return res.status(200).json({sum})
    }
    catch(err){
        return res.status(400).json({
            success : false
        })
    }
}
module.exports = {getSum}