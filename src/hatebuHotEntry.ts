export class hatebuHotEntry {
    private domain = "https://rpp5disyhf.execute-api.ap-northeast-1.amazonaws.com/prod/hatebu-api";
    
    private request(url:string):any {
        return new Promise(resolve => {
            let xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                resolve(JSON.parse(xhr.response));
            };
            xhr.open("GET", url);
            xhr.send();
        });
    }
    
    public async all(){
        const url = this.domain + "?category=all";
        let res:any = await this.request(url);
        console.log(res);
        return res;
    }
    
    public async life(){
        const url = this.domain + "?category=life";
        let res:any = await this.request(url);
        
        return res;
    }
    
    public async knowledge(){
        const url = this.domain + "?category=knowledge";
        let res:any = await this.request(url);
        
        return res;
    }
    
    public async it(){
        const url = this.domain + "?category=it";
        let res:any = await this.request(url);
        
        return res;
    }
    
    public async fun(){
        const url = this.domain + "?category=fun";
        let res:any = await this.request(url);
        
        return res;
    }
    
    public async entertainment(){
        const url = this.domain + "?category=entertainment";
        let res:any = await this.request(url);
        
        return res;
    }
    
    public async game(){
        const url = this.domain + "?category=game";
        let res:any = await this.request(url);
        
        return res;
    }
    
    public async economics(){
        const url = this.domain + "?category=economics";
        let res:any = await this.request(url);
        
        return res;
    }
    
    public async social(){
        const url = this.domain + "?category=social";
        let res:any = await this.request(url);
        
        return res;
    }
}