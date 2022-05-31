# unimind-backend
Python 3.8 -3.9 is required to start project locally 

**Libraries installation**
Enter the /blog directory via console and use:
```
python install pip
pip install requirements.txt
```

**Migrations**
Run when made changes to models.py, and on the first run.
```
python manage.py migrate
python manage.py makemigrations 
```

**Run project**
```
python manage.py runserver 
```

API is available on url  http://localhost:8000/api/blog/
