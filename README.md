# Backend-Ledger-System
The Backend Ledger System is a robust server-side application developed using Node.js, Express.js, and MongoDB, designed to simulate a real-world financial transaction system.The primary objective of this project is to manage secure and consistent money transfers between user accounts while maintaining a detailed and reliable transaction history.

The system follows a structured ledger-based architecture, where every transaction is recorded as two separate entries: a debit from the sender’s account and a credit to the receiver’s account. This approach ensures transparency, traceability, and accuracy in financial operations. The application supports features such as account validation, balance checking, idempotency handling to prevent duplicate transactions, and transaction status management (e.g., PENDING, COMPLETED, FAILED).
Authentication and authorization are implemented using JSON Web Tokens (JWT), ensuring that only authenticated users can perform sensitive operations. Additionally, role-based access control is incorporated to differentiate between regular users and system users for specific privileged operations such as initializing funds.

The project also includes middleware for request validation and security, along with proper error handling to manage edge cases like insufficient balance, invalid accounts, or duplicate transaction requests. MongoDB is used as the database to store user accounts, transactions, and ledger entries, leveraging its flexibility and scalability.

To enhance reliability, the system is designed with a clear transactional flow, ensuring that each step—from request validation to ledger updates—is handled systematically. Email notification services are integrated to inform users about successful transactions, improving user experience.

Overall, this project demonstrates strong backend development skills, including REST API design, database modeling, authentication mechanisms, and real-world financial logic implementation. It serves as a solid foundation for building scalable fintech or payment processing systems.
