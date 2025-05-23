# OptiVault-Systems

![GitHub License](https://img.shields.io/github/license/rishithadasari2005/OptiVault-Systems)
![Python Version](https://img.shields.io/badge/python-3.8%2B-blue)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

**OptiVault-Systems** is a fintech solution for optimizing ATM cash management using AI-driven forecasting, denomination optimization, and replenishment scheduling. It minimizes operational costs, reduces idle cash, and ensures uninterrupted ATM service.

## 🚀 Features
- **Cash Demand Forecasting**: Predicts withdrawal patterns using machine learning (ANN, BLSTM).
- **Denomination Optimization**: Calculates ideal banknote mixes to meet user needs.
- **Replenishment Scheduling**: Optimizes cash-in-transit (CIT) schedules to reduce costs.
- **Real-Time Monitoring**: Tracks cash levels with alerts for low stock or anomalies.
- **Scalable API**: Integrates with banking systems for real-time cash management.
- **Sustainable Design**: Supports cash recycling and energy-efficient operations.

## 📦 Installation

### Prerequisites
- Python 3.8+
- Git
- (Optional) Docker

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/rishithadasari2005/OptiVault-Systems.git
   cd OptiVault-Systems
   ```

2. Set up a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your database credentials and API keys.

5. Run the application:
   ```bash
   python main.py
   ```

### Docker (Optional)
```bash
docker build -t optivault-systems .
docker run -p 8000:8000 optivault-systems
```

## 🛠️ Usage

1. **Prepare Data**:
   - Place ATM transaction data (CSV) in `data/`.
   - Required fields: `timestamp`, `amount`, `denomination`, `atm_id`, `location`.

2. **Forecast Cash Demand**:
   ```bash
   python scripts/forecast_demand.py --atm-id <ATM_ID> --days 7
   ```

3. **Optimize Denominations**:
   ```bash
   python scripts/optimize_denominations.py --atm-id <ATM_ID>
   ```

4. **Schedule Replenishments**:
   ```bash
   python scripts/schedule_replenishment.py --region <REGION_NAME>
   ```

5. **Run API**:
   ```bash
   uvicorn app.api:app --host 0.0.0.0 --port 8000
   ```
   Access endpoints at `http://localhost:8000/docs`.

## 📂 Project Structure
```
OptiVault-Systems/
├── data/                   # Sample ATM transaction data
├── scripts/                # Core scripts for forecasting and optimization
│   ├── forecast_demand.py
│   ├── optimize_denominations.py
│   ├── schedule_replenishment.py
├── app/                    # API and application logic
│   ├── api.py              # FastAPI endpoints
│   ├── models/             # ML models
├── tests/                  # Unit tests
├── requirements.txt        # Dependencies
├── .env.example            # Environment config template
├── Dockerfile              # Docker setup
└── README.md               # This file
```

## 🛠 Technologies
- **Python**: 3.8+
- **Machine Learning**: TensorFlow, scikit-learn
- **Data Processing**: Pandas, NumPy
- **API**: FastAPI
- **Database**: SQLite (default), PostgreSQL (production)
- **Optimization**: SciPy
- **Containerization**: Docker

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the repo.
2. Create a branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m "Add YourFeature"`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

