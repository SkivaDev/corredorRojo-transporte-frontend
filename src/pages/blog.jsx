import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Blog = () => {
  return (
    <>
    <Header></Header>
      <div>
        <div className="image-container">
            <img src="/src/assets/images/201.jpeg" alt="Imagen centrada"/>
        </div>

        
        <div className="image-container">
            <img src="/src/assets/images/tarifa.jfif" alt="Segunda imagen centrada"/>
        </div>

        <div className="image-container">
            <img src="/src/assets/images/rutas.jfif" alt="Tercera imagen centrada"/>
        </div>

        
        <div className="ticket-form-container">
            <form className="ticket-form">
                <h2>Compra de Tickets</h2>

                <div className="form-group">
                    <label htmlFor="from"> <i className="fas fa-location-arrow"></i>Desde:</label>
                    <select id="from" name="from">
                        <option value="lugar1">Calle 66</option>
                        <option value="lugar2">Venezuela</option>
                        <option value="lugar3">Óvalo la Perla</option>
                        
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="to"> <i className="fas fa-location-dot"></i>Hasta:</label>
                    <select id="to" name="to">
                        <option value="lugar1">Ceres</option>
                        <option value="lugar2">Berlín</option>
                        <option value="lugar3">Holanda</option>
                        
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date"><i className="fas fa-calendar-day"></i>Fecha:</label>
                    <input type="date" id="date" name="date" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="quantity"><i className="fas fa-sort-numeric-up"></i> Cantidad:</label>
                    <input type="number" id="quantity" name="quantity" min="1" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="total-cost"><i className="fas fa-dollar-sign"></i> Costo Total:</label>
                    <input type="text" id="total-cost" name="total-cost" readOnly/>
                </div>

                <button className="text-white py-5 rounded-2xl bg-red-600" type="submit">Comprar</button>
            </form>
        </div>
    </div>

    <Footer></Footer>
    </>
    
  );
};

export default Blog;