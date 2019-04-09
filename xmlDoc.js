/*
xml:封装xml文件解析和一些方法
*/
var XML={
    cNew:function(fName){//返回一个实例
        var obj={};
        //****************私有函数****************
        function xmlDoc(fName){//解析外部xml文件为XML DOM对象
            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp=new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET",fName,false);
            xmlhttp.send();
            return xmlhttp.responseXML;
        }
        //****************公有方法****************
        //返回相应TagName的XML节点（第一个）
        obj.node=function(tagName){
            return this.doc.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;
        }
        //返回相应TagName的XML节点集合
        obj.nodes=function(tagName){
            var m_nodes=this.doc.getElementsByTagName(tagName);
            var nodesObj={};
            //返回响应的node
            nodesObj.item=funtion(index){
                m_nodes[i];
            }
            return nodesObj;
        }
        //****************公有成员****************
        obj.doc=xmlDoc(fName);
        return obj;
    }
}
