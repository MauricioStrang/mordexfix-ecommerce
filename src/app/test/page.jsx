import SelectButton from "@/components/selectButton/selectButton";
import styles from "./test.module.css"
import TestHeader from "@/components/testHeader/testHeader";
import SubHeader from "@/components/subHeader/subHeader";


const TestPage = () =>{
    return(
        <div className={styles.container}>
            <h1>This is Test Page</h1>
            <SelectButton/>
            <TestHeader/>
            <SubHeader/>
        </div>
    )
}


export default TestPage;