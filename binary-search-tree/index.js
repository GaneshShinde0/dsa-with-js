class Node {
    constructor(data){
        this.left=null;
        this.right=null;
        this.data = data;
    }
    
    insert(data){
        if (data>this.data && this.right){
            return this.right.insert(data);
        }else if(data>this.data ){
            this.right = new Node(data);
            return this.right;
        }else if (data<this.data && this.left){
            return this.left.insert(data);
        }else if(data<this.data){
            this.left = new Node(data);
            return this.left;
        }
    }
    
    contains(data){
        if(this.data===data) return this;
        if (data>this.data && this.right){
            return this.right.contains(data);
        }else if (data<this.data && this.left){
            return this.left.contains(data);
        }
        return null;
    }
}
