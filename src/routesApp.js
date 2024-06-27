import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {DashboardPage} from './views/pages/dashboard/dashboard.page'
import { ProductViewPage, ProductsListPage, ProductFormPage } from './views/pages/products'
import { ContactPage } from './views/pages/contact/contact.page'


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products" element={<ProductsListPage />} />
                <Route path="/product/:id" element={<ProductViewPage />} />
                <Route path="/productform/:id" element={<ProductFormPage />} />


            </Routes>
        </BrowserRouter>
    )
}
