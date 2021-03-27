current_dir=$PWD;
python3 tracker/manage.py runserver;
cd users-fe;
npm start;
cd $PWD;
