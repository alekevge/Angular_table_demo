import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

head:any[]=[]
  data:any[]=[]
  visibility_hiden:any[]=[]

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  on_update()
  {
    console.log("0")
    this.http.get("/assets/data.json",).subscribe((res)=>{console.warn("ress",res);this.head=res['head']; this.data=res['data']}, (er)=>{console.error("http_fails",er)})
  }


  on_change_visibility(elem)
  {
    let header=this.head.find(this.search.bind(elem)
     )

    if (this.visibility_hiden[elem]===true)
    {
      this.visibility_hiden[elem]=undefined

      if (this.visibility_hiden[header.name]===null)
      {
        this.visibility_hiden[header.name]=undefined
      }

    }
    else
    {

      this.visibility_hiden[elem]=true
      let key = true
      header['sub-head'].forEach(el => {
        //if (this.visibility_hiden[el.name]!==true)
        key=key&&this.visibility_hiden[el.name] 
      });
      if (key) this.visibility_hiden[header.name]=null
    }

    

    console.warn("",this.visibility_hiden)
  }

search(el,index,array)
{
  if (el['sub-head']===null)
    return false
  else
    return (el['sub-head'].find(x=>x.name==this))
}

}

