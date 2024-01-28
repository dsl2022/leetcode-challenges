# Definition for singly-linked list.
from typing import List, Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
import heapq
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        k = len(lists)
        if k == 0:
            return None
        elif k == 1:
            return lists[0]
        queue, dummy, nodeMap = [], ListNode(None), {index: head for index, head in enumerate(lists)}
        answer = dummy
        for index, head in enumerate(lists):
            if head:
                heapq.heappush(queue, (head.val, index))
        while queue:
            (val, index) = heapq.heappop(queue)
            head = nodeMap[index]
            dummy.next = ListNode(val)
            dummy = dummy.next
            nodeMap[index] = head.next
            if nodeMap[index]:
                heapq.heappush(queue, (nodeMap[index].val, index))
        return answer.next




#         k = len(lists)
#         if k == 0:
#             return None
#         elif k == 1:
#             return lists[0]
#         head = ListNode(None)
#         dummy = head
#         while len(lists) > 0:
#             current = 0
#             if not lists[current]:
#                 lists.pop(current)
#                 continue
#             i = 0
#             while len(lists) > i:
#                 if not lists[i]:
#                     lists.pop(i)
#                     continue
#                 if lists[current] and lists[current].val > lists[i].val:
#                     current = i
#                 i += 1
#             head.next = lists[current]
#             head = head.next
#             if not lists[current]:
#                 lists.pop(current)
#             else:
#                 lists[current] =  lists[current].next
#             if not lists[current]:
#                 lists.pop(current)
#         return dummy.next
