/* eslint-disable quotes */
export const carousels = [
	{
		img: 'banner',
		headerText: 'If you wanted to get rich, how would you do it?',
		baseText: "Lorem Ipsum has been the industry's standard",
		time: '2 hours ago',
	},
	{
		img: 'banner_1',
		headerText: 'If you wanted to get rich, how would you do it?',
		baseText: "Lorem Ipsum has been the industry's standard",
		time: '2 hours ago',
	},
	{
		img: 'banner_2',
		headerText: 'If you wanted to get rich, how would you do it?',
		baseText: "Lorem Ipsum has been the industry's standard",
		time: '2 hours ago',
	},
	{
		img: 'banner_3',
		headerText: 'If you wanted to get rich, how would you do it?',
		baseText: "Lorem Ipsum has been the industry's standard",
		time: '2 hours ago',
	},
];


export const lazyImages = [
	{
		id: 1,
		image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name:'technology'
	},
	{
		id: 2,
		image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		name:'business'
	},
	{
		id: 3,
		image:'https://images.unsplash.com/photo-1447233053706-4d987282231b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNwb3J0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		name:'sports'
	},
	{
		id: 4,
		image:'https://images.unsplash.com/photo-1517524365899-2b96b751f85d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTQxNjE2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
		name:'entertainment'
	},
	{
		id:5,
		image:'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		name:'health',
	},
	{
		id:6,
		image:'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VuZXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
		name:'general'
	}

]

/*
<Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
	  showStatus={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { position:'relative', color: "white", cursor: "pointer",display:'block',bottom:210, height:50,width:55,right:-460};
        const style = isSelected
          ? { ...defStyle,color: "white", padding:10, borderRadius:10, display:'block',width:55}
          : { ...defStyle };
        return (
			<div className='styles'>
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            { index + 1}
          </span>
		  </div>
        );
      }}
    > 
*/

/*
<Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
	  showStatus={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { position:'relative', color: "white", cursor: "pointer",display:'block',bottom:210, height:50,width:55,right:-460};
        const style = isSelected
          ? { ...defStyle,color: "white", padding:10, borderRadius:10, display:'block',width:55}
          : { ...defStyle };
        return (
			<div className='styles'>
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            { index + 1}
          </span>
		  </div>
        );
      }}
    > 
*/