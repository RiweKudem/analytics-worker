import logging
import os
from dotenv import load_dotenv
from analytics_worker.worker import Worker

if __name__ == "__main__":
    # Load environment variables
    load_dotenv()

    # Configure logging
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(levelname)s] %(message)s",
        handlers=[logging.StreamHandler()]
    )

    # Get worker configuration from environment variables
    worker_config = {
        "queue_name": os.getenv("QUEUE_NAME"),
        "broker_url": os.getenv("BROKER_URL"),
        "task_queue": os.getenv("TASK_QUEUE")
    }

    # Create and start worker
    worker = Worker(**worker_config)
    worker.start()