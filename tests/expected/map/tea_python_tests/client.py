# This file is auto-generated, don't edit it. Thanks.
from Source.SourceClient import SourceClient as SourceSourceClient


class Client(SourceSourceClient):
    def __init__(self, config):
        super().__init__(config)
        self._endpoint_rule = "central"
        self._endpoint_map = {
            "ap-northeast-1": "cusanalytic.aliyuncs.com",
            "ap-south-1": "cusanalytic.aliyuncs.com"
        }
        _endpoint_map.get('ap-northeast-1')
        _endpoint_map["ap-northeast-1"] = ""
