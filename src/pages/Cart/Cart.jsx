import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topline from '../../widgets/topline/topline';
import Header from '../../widgets/header/Header';
import Footer from '../../widgets/Footer/Footer';
import "./Cart.scss";
import { URL } from '../../shared/URL/URL';

function Cart() {
    const [data, setData] = useState({ items: [] });

    // Функция для удаления товара по id
    const removeItem = async (itemId) => {
        try {
            const token = localStorage.getItem('access');
            const response = await axios.post(URL + 'cart/remove/', { id: itemId }, { // Отправляем id товара для удаления
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            });
            setData(prevData => ({
                ...prevData,
                items: prevData.items.filter(item => item.id !== itemId)
            }));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('access');
            try {
                const response = await axios.get(URL + "/cart/", {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                    }
                });
                setData(response.data); // Устанавливаем данные корзины
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <Topline />
            <Header />
            <div className="cart">
                <h2>Корзина</h2>
                {data.items.length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    <div className='cart-list'>
                        {data.items.map(item => (
                            <div className='cart_list' key={item.id}>
                                <div className="cart-item">
                                    <h3>{item.post.title}</h3>
                                    <p>Цена: {item.post.price} ₽</p>
                                    <img src={item.post.image} alt={item.post.title} />
                                    <p>Количество: {item.quantity}</p>
                                    <h2>Итого: {item.total_price} $</h2>
                                    <button onClick={() => removeItem(item.id)}>Удалить</button> {/* Теперь используется id товара */}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {data.items.length > 0 && (
                    <div className="cart-total">
                        <h3>
                            Итого: {data.items.reduce((total, item) => total + item.total_price, 0)} $
                        </h3>
                    </div>
                )}
            </div>
            <Footer />
        </section>
    );
}

export default Cart;
