function init_cache(){
	var init_data = {
		cache_size:10,
		location:'/tmp',
		algorithm:'lru',
		item_size:1024,
		storage_type:'btree'
	};
	
	var a = arguments;
	for(var i=0; i<a.length; i++){
		if(typeof a[i]=='object'){
			init_data = a[i];
			break;
		} else if(typeof a[i] == 'number'){
			init_data.cache_size = a[i];
			break;
		} else {
			throw new Error("bad cache init param");
		}
	}
}
