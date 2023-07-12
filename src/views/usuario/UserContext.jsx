export function UserProvider({ children }) {
    const [user, setUser] = React.useState(null);
  
    // Aqui você pode buscar as informações do usuário ou fazer a autenticação
  
    // Exemplo de função para buscar informações do usuário
    const fetchUser = () => {
      // Simulação de chamada assíncrona para buscar o usuário
      setTimeout(() => {
        const userData = { name: 'João' };
        setUser(userData);
      }, 1000);
    };
  
    // Chame a função fetchUser para buscar o usuário quando o componente for montado
    React.useEffect(() => {
      fetchUser();
    }, []);
  
    return (
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    );
  }