import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
          <div className={styles.col}>
            <h3>INFORMAÇÕES</h3>
            
          </div>
         
          <div className={styles.col}>
            <p>
              Email para Contato: locavcom@gmail.com
            </p>        
            <p>
            Telefone: 14 1234-5678
            </p>
          
        
      </div>
    </footer>
  );
};

export default Footer;