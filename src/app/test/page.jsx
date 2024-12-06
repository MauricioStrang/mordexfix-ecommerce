import SelectButton from "@/components/selectButton/selectButton";
import styles from "./test.module.css"
import Header from "@/components/header/header";


const TestPage = () =>{
    return(
        <div className={styles.container}>
            <h1>This is Test Page</h1>
            <SelectButton/>
            <Header/>
        </div>
    )
}


export default TestPage;