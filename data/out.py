import json
import os


def get_all_files_json(path_dir, output_json='files.json'):
    """
    遍历目录 path_dir 下的所有文件，保存文件名、路径和大小(KB)到 JSON
    """
    file_list = []

    for root, _dirs, files in os.walk(path_dir):
        for f in files:
            full_path = os.path.join(root, f)
            size_mb = os.path.getsize(full_path) / 1024 / 1024   # MB
            file_info = {
                'fileName': f,
                'label': f,
                'url': f"https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/heads/main/data/{full_path.replace(os.sep, '/')}",
                'size': round(size_mb, 3)  # 保留两位小数
            }
            file_list.append(file_info)

    # 保存为 JSON
    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(file_list, f, ensure_ascii=False, indent=4)

    print(f"共找到 {len(file_list)} 个文件，已保存到 {output_json}")
    return file_list


# 示例
get_all_files_json('samples', 'data.json')
