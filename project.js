async function getCompanyData(){
    try {
        let response = await fetch("url");
        if(!response.ok){
            throw new Error("HTTP Error : ",response.status )
        }
        let data = await response.json();
    } catch (err) {
        console.error(err)
        
    }
}