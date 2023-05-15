
const ReviewCard = ({order}) => {
    
    return (
      <div className="block rounded-lg p-4 shadow-md shadow-indigo-100">
      <img
        alt="Home"
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full rounded-md object-cover"
      />
    
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>
    
            <dd className="text-sm text-gray-500">${order?.price.toFixed(2)}</dd>
          </div>
    
          <div className="flex justify-between items-center">
            <dt title={order?.title} className="">{order?.title.substring(0, 20)}</dt>
    
            <button className=" bg-universal text-white p-1 text-sm rounded-md">Add Review</button>
          </div>
        </dl>
    
        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Status</p>
    
              <p className="font-medium">{order?.status}</p>
            </div>
          </div>
    
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
    
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Total Order</p>
    
              <p className="font-medium">2 rooms</p>
            </div>
          </div>
    
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
    
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Review</p>
    
              <p className="font-medium">Added</p>
            </div>
          </div>
        </div>
      </div>
    </div>
       
    );
};

export default ReviewCard;