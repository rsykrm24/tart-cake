export function Parameter(id, amount, name, phone) {
  let parameter = {
    "transaction_details": {
        "order_id":id,
        "gross_amount": amount 
    },
    "credit_card":{
        "secure" : true
    },
    "customer_details": {
        "name":name, 
        "phone": phone
    }
  };
  return parameter 
}