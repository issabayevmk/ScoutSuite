from ScoutSuite.providers.aws.facade.base import AWSFacade
from ScoutSuite.providers.aws.resources.base import AWSResources
from ScoutSuite.providers.utils import get_non_provider_id


class Recorders(AWSResources):
    def __init__(self, facade: AWSFacade, region: str):
        super().__init__(facade)
        self.region = region

    async def fetch_all(self):
        raw_recorders = await self.facade.config.get_recorders(self.region)
        for raw_recorder in raw_recorders:
            name, resource = self._parse_recorder(raw_recorder)
            self[name] = resource

    def _parse_recorder(self, raw_recorder):
        recorder = {}
        recorder['name'] = raw_recorder['name']
        recorder['region'] = self.region
        recorder['role_ARN'] = raw_recorder['roleARN']
        recorder['recording_group'] = raw_recorder['recordingGroup']
        recorder['enabled'] = raw_recorder.get('ConfigurationRecordersStatus', {})['recording']
        recorder['last_status'] = raw_recorder.get('ConfigurationRecordersStatus', {}).get('lastStatus')
        recorder['last_start_time'] = raw_recorder.get('ConfigurationRecordersStatus', {}).get('lastStartTime')
        recorder['last_status_change_time'] = raw_recorder.get('ConfigurationRecordersStatus', {}).get('lastStatusChangeTime')
        return get_non_provider_id(recorder['name']), recorder
