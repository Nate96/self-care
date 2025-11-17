from datetime import datetime
from datetime import datetime

def _sql_script(file_path: str) -> str:
    """sql script
    Reads in the given .sql file

    Returns: sql_stript string
    """
    with open(file_path, 'r') as file:
        script = file.read()
    return script
