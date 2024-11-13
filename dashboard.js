async function fetchTransactions() {
    try {
      const response = await fetch('/api/transactions');
      const transactions = await response.json();
      if (response.ok) {
        const transactionList = document.getElementById('transactionList');
        transactions.forEach(transaction => {
          const li = document.createElement('li');
          li.textContent = `${transaction.description} - $${transaction.amount}`;
          transactionList.appendChild(li);
        });
      } else {
        alert('Failed to fetch transactions');
      }
    } catch (error) {
      alert('Error fetching transactions');
    }
  }
  
  document.getElementById('logoutButton').addEventListener('click', () => {
    document.cookie = "auth_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    window.location.href = 'login.html';
  });
  
  fetchTransactions();
  