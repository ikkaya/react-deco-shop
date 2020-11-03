import Item1 from '../../img/img1.jpg';
import Item2 from '../../img/img2.jpg';
import Item3 from '../../img/img3.jpg';
import Item4 from '../../img/img4.jpg';
import Item5 from '../../img/img5.jpg';
import Item6 from '../../img/img6.jpg';

const initState = {
    items: [
        {
            id: 1,
            title: "Casio Gold Clock",
            img: Item1,
            price: 10,
            info: "Casio Round Gold Resin Wall Clock (35 cm x 35 cm x 5.4 cm)",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 2,
            title: "Casio Brown Clock",
            img: Item2,
            price: 10,
            info: "Casio Round Brown Resin Wall Clock (30.5 cm x 30.5 cm x 4.3 cm)",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 3,
            title: "Seiko Clock",
            img: Item3,
            price: 10,
            info: "Seiko Plastic Metallic Blue Wall Clock (30 cm x 30 cm x 4 cm)",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 4,
            title: "Kriva Mirror",
            img: Item4,
            price: 7,
            info: "Kriva Plastic Silver Mirror (2.5 x 30 x 19.5 cm)",
            inCart: false,
            count: 0,
            total: 0
    
        },
        {
            id: 5,
            title: "Makeup Mirror",
            img: Item5,
            price: 5,
            info: 
                "Makeup Mirror Wood Frame Rustic Finish for Vanity Set Dresser Bedroom Bathroom Decorative Countertop Stand Mirror",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 6,
            title: "Quality Glass Frameless Mirror",
            img: Item6,
            price: 8,
            info: "Long lasting and fine quality product. It can be hanged in any orientation – vertically or horizontally, which makes it best suited for the bedrooms, as vanity mirror or along with your sideboard/console table in your dining room",
            inCart: false,
            count: 0,
            total: 0
        }
    ],
    addedItems:[],
    total: 0,

}
const cartReducer= (state = initState,action)=>{

    if (action.type === 'ADD_TO_CART'){
        let addedItem = state.items.find(item=> item.id === action.id)
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price,
                  }
        }
         else{
            addedItem.quantity = 1;
            
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
            }
            
        }
    }
    if(action.type === 'REMOVE_ITEM'){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal,
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== 'ADD_QUANTITY'){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal,
          }
    }
    if(action.type=== 'SUBTRACT_QUANTITY'){  
        let addedItem = state.items.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal,
            }
        }
        
    }
    if(action.type=== 'ADD_SHIPPING'){
        return{
        ...state,
        total: state.total + 6
        }
    }
    if(action.type=== 'SUBTRACT_SHIPPING'){
        return{
        ...state,
        total: state.total - 6
        }
    }
    return state
}
    
    
export default cartReducer; 