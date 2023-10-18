import { createContext, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

    const location = useLocation();
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    const deleteItem = (id) => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))
        var newCartItems

        if (cartItems.find(item => item.id === id && item.amount > 1)) {
            newCartItems = cartItems.map(item => {
                if (item.id === id && item.amount > 1) {
                    item.amount -= 1
                }
                return item
            })
        } else {
            newCartItems = cartItems.filter(item => item.id !== id)
        }

        setCartItems(newCartItems)
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    const deleteAll = () => {
        setCartItems([]);
        localStorage.setItem('cartItems', JSON.stringify([]));
    }

    // idk if ill use this
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // idk
    useEffect(() => {
        let price = 0
        for (let i = 0; i < cartItems.length; i++) {
            price += (cartItems[i].price * cartItems[i].amount)
        }
        setTotalPrice(price)
    }, [cartItems])

    function getTotalPrice() {
        let price = 0
        for (let i = 0; i < cartItems.length; i++) {
            price += (cartItems[i].price * cartItems[i].amount)
        }
        setTotalPrice(price)
    }

    function getTotalItems() {
        let items = 0
        for (let i = 0; i < cartItems.length; i++) {
            items += 1
        }
        setTotalItems(items)
    }

    function flipCart() {
        if (location.pathname === '/checkout') {
            return document.getElementById('cart').style.display = 'none'
        }

        if (document.getElementById('cart').style.display === 'block') {
            document.getElementById('cart').style.display = 'none'
        } else {
            document.getElementById('cart').style.display = 'block'
        }
    }

    const addItem = (id, name, img, price) => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))
        let newCartItems

        if (cartItems.find(item => item.id === id)) {
            console.log('Produkten finns redan i varukorgen')
            newCartItems = cartItems.map(item => {
                if (item.id === id) {
                    item.amount += 1
                }
                return item
            })
        } else {
            newCartItems = [...cartItems, { id: id, name: name, img: img, price: price, amount: 1 }]
        }

        console.log(cartItems)
        console.log(newCartItems)
        if (cartItems === newCartItems) {
            message('Något gick fel, försök igen', 'warning')
        } else {
            message(name + ' lades till i varukorgen', 'success')
        }

        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    function message(text, type) {
        const msgbox = document.querySelector('#msgbox');

        const p = document.createElement('p');
        p.classList.add(type);
        p.textContent = text;
        msgbox.appendChild(p);
        setTimeout(() => {
            p.parentNode.removeChild(p);
        }, 2500);
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            totalPrice,
            totalItems,
            addItem,
            deleteItem,
            deleteAll,
            flipCart,
            message,
            getTotalPrice,
            getTotalItems,
        }}>
            {children}
        </CartContext.Provider>
    );
}