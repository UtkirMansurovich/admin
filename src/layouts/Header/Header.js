import { HeaderSection } from "./Header.styled";
import Dashboard from "../../components/Dashboard/Dashboard";
import GenerateBtn from "../../components/GenerateBtn/GenerateBtn";
import TopCard from "../../components/Cards/TopCard";
import EarningChart from "../../components/EarningChart/EarningChart";
import RevenueChart from "../../components/RevenueChart/RevenueChart";

const Header = () => {
    return (
        <HeaderSection>
            <Dashboard/>
            <GenerateBtn/>
            <TopCard/>
            <EarningChart/>
            <RevenueChart/>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </HeaderSection>
    )
}

export default Header;