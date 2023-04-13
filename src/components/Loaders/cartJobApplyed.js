import { getShoppingCart } from "../../utilities/fakedb";

const cartJobApplyed = async () =>{
  const loaderJobs = await fetch('/FeaturedJobs.json');
  const jobs = await loaderJobs.json();

  const storedCart = getShoppingCart();
  const saveCart = []
  for(const id in storedCart){
    const addJobs = jobs.find(job => job.id == id);
    if(addJobs){
      saveCart.push(addJobs)

    }
   
  }
  return saveCart;
}

export default cartJobApplyed;