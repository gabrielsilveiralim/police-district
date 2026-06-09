import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Occurrence from "./page/occurrence/Occurrence";
import Dashboard from "./page/dashboard/Dashboard";
import Reports from "./page/reports/Reports";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/occurrence" element={<Occurrence />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />

            </Routes>
        </BrowserRouter>
    )
}