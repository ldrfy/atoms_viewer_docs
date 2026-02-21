import json
import os


def get_all_files_json(
    path_dir,
    output_json='files.json',
    version='v0.0.1',
):
    """
    遍历目录 path_dir 下的所有文件，保存文件名、路径和大小(MB)到 JSON，
    并按如下规则排序：
    1. xyz 在最前
    2. pdb 其次
    3. 其他格式最后
    4. 同一类内按体积从小到大

    version: GitHub tag / branch，例如 v0.0.1
    """
    file_list = []

    for root, _dirs, files in os.walk(path_dir):
        for f in files:
            full_path = os.path.join(root, f)
            size_mb = os.path.getsize(full_path) / 1024 / 1024
            file_info = {
                'fileName': f,
                'label': f,
                'url': (
                    "https://raw.githubusercontent.com/"
                    f"ldrfy/atoms_viewer_docs/refs/tags/{version}/data/"
                    f"{full_path.replace(os.sep, '/')}"
                ),
                'size': round(size_mb, 3)
            }
            file_list.append(file_info)

    def sort_key(x):
        ext = x['fileName'].split('.')[-2].lower()
        if ext == 'xyz':
            group = 0
        elif ext == 'pdb':
            group = 1
        else:
            group = 2
        return (group, x['size'], x['fileName'])

    file_list.sort(key=sort_key)

    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(file_list, f, ensure_ascii=False, indent=4)

    print(f"共找到 {len(file_list)} 个文件，已保存到 {output_json}")
    return file_list


get_all_files_json('samples', 'data.json', version='v1.0.0')
