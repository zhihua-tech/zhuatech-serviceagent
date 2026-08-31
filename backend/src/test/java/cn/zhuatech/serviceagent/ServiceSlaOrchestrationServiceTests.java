/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.serviceagent;

import cn.zhuatech.serviceagent.service.ServiceSlaOrchestrationService;
import org.junit.jupiter.api.Test;

import java.time.OffsetDateTime;

import static org.assertj.core.api.Assertions.assertThat;

class ServiceSlaOrchestrationServiceTests {
    private final ServiceSlaOrchestrationService service = new ServiceSlaOrchestrationService();

    @Test void escalatesBreachedSensitiveTicket() {
        var opened = OffsetDateTime.parse("2026-08-31T08:00:00+08:00");
        var result = service.orchestrate(new ServiceSlaOrchestrationService.Request(
                "SRV-9001", "P1", opened, opened.plusMinutes(22), true, true, false, 96));
        assertThat(result.escalation()).isEqualTo("SLA_BREACH_COMMAND");
        assertThat(result.autoReplyAllowed()).isFalse();
        assertThat(result.controls()).hasSizeGreaterThanOrEqualTo(2);
    }

    @Test void permitsAuditedLowRiskDraft() {
        var opened = OffsetDateTime.parse("2026-08-31T09:00:00+08:00");
        var result = service.orchestrate(new ServiceSlaOrchestrationService.Request(
                "SRV-9002", "P2", opened, opened.plusMinutes(10), false, false, false, 91));
        assertThat(result.escalation()).isEqualTo("QUEUE_MONITORING");
        assertThat(result.autoReplyAllowed()).isTrue();
    }
}
