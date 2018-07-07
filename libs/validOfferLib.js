let validOffer=(offerPercentage,date)=>{
    if(offerPercentage!=null && offerPercentage!='' && offerPercentage!=undefined && date!=null && date!='' && date!=undefined)
    {   
        if(Date.parse(date)<Date.now()){
            return true;
        }
        return false;
    }
    return false;
}
module.exports={
    validOffer:validOffer
}