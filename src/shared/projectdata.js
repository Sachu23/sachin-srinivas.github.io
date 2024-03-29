const base_url = 'https://sachu23.github.io/sachin-srinivas.github.io'

export const PROJECTS =
    [
        {
            id: 0,
            name:'Chicago Bikers Real-Time Navigation System',
            image: base_url + '/images/bike.png',
            description:'Developed a mobile application using the React Native framework and utilized React and Express JavaScript for the backend.',
            link : "https://github.com/Sachu23/Flutter-Bike_Navigation",
            feature:true,
            techstack: "Flutter, React-Native, ReactJS, ExpressJS, NodeJS, MongoDB, REST API",
            renderfirst: false
        },
        {
            id: 1,
            name:'MS - GSP (Minimum Support - Generalized Sequential Pattern) Mining Algorithm',
            image: base_url + '/images/face.jpg',
            description:'GSP mining can be used to analyze social media data, such as posts and comments, and identify patterns in the data that indicate trends, sentiment, or other insights.',
            link: 'https://github.com/Sachu23/DMTM---MS-GSP-Algo-Implementation',
            feature:false,
            techstack: "Python, Data Mining and Text Mining algorithms",
            renderfirst: true
        },
        {
            id: 2,
            name:'Twitter Sentiment Analysis',
            image: base_url + '/images/twitter.png',
            description:'Built a real-time Twitter sentiment analysis app using Twitter API, Apache Kafka for data streaming, NLP techniques, and CNN for sentiment classification. Visualized results with Heat Maps and stored data in MongoDB',
            link: 'https://github.com/Sachu23/Twitter-Setiment-Analysis',
            feature:true,
            techstack: "Microservices, Twitter API, Apache Kafka, Tensor Flow, MongoDB, Docker-Container, Heat Maps.",
            renderfirst:false
        },
        {
         id: 3,
            name:'Divy-Van-Assistant',
            image: base_url + '/images/ronaldo.jpg',
            description:'Software to help maintance staff to keep track of Divvy Bike inventory.',
            link: 'https://github.com/Sachu23/Divy-Van-Assistant',
            feature:false,
            techstack: "Java, JavaFX, Swing, MongoDB",
            renderfirst: true
        },
        {
            id: 4,
            name:'Cloud Orchestrator',
            image: base_url + '/images/cloud.png',
            description:'Designed and developed a Cloud Orchestrator for Docker-based REST API deployment, incorporating load balancing, fault tolerance, and auto-scaling.',
            link: 'https://github.com/Sachu23/Cloud-Orchestrator',
            feature:true,
            techstack: "ExpressJS, AWS EC2 instance, Docker-Container, ReactJS, NodeJS, MongoDB, Apache Kafka, Zookeeper",
            renderfirst:false
        },
        {
            id: 5,
            name:'Stock Market Prediction',
            image: base_url+ '/images/stock.jpg',
            description:'A simple stock market prediction using logistic regression',
            link: '',
            feature:false,
            techstack: "Jupyter-Notebook, Keras",
            renderfirst: true
        }
        
    ];